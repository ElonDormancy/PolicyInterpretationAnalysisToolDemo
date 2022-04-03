function BarChart(data, {
    marginTop = 20, // the top margin, in pixels
    marginRight = 0, // the right margin, in pixels
    marginBottom = 30, // the bottom margin, in pixels
    marginLeft = 40, // the left margin, in pixels
    width = 640, // the outer width of the chart, in pixels
    height = 400, // the outer height of the chart, in pixels
    xDomain, // an array of (ordinal) x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    xPadding = 0.1, // amount of x-range to reserve to separate bars
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor", // bar fill color
    duration: initialDuration = 250, // transition duration, in milliseconds
    delay: initialDelay = (_, i) => i * 20 // per-element transition delay, in milliseconds
} = {}) {
    // Compute values.
    const X = d3.map(data, d => d.category);
    const Y = d3.map(data, d => d.quantity);
    // Compute default domains, and unique the x-domain.
    if (xDomain === undefined) xDomain = X;
    if (yDomain === undefined) yDomain = [0, d3.max(Y)];
    xDomain = new d3.InternSet(xDomain);

    // Omit any data not present in the x-domain.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
    const format = yScale.tickFormat(100, yFormat);
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", " height: auto; height: intrinsic;");

    const yGroup = svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick").call(grid))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));

    let rect = svg.append("g")
        .attr("fill", color)
        .selectAll("rect")
        .data(I)
        .join("rect")
        .property("key", i => X[i]) // for future transitions
        .call(position, i => xScale(X[i]), i => yScale(Y[i]))
        .style("mix-blend-mode", "multiply")
        .call(rect => rect.append("title")
            .text(i => [X[i], format(Y[i])].join("\n")));

    const xGroup = svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .attr("class", "fonts")
        .call(xAxis)
        .selectAll("text")
        .attr("transform", `translate(-10,10)rotate(-45)`)

    // A helper method for updating the position of bars.
    function position(rect, x, y) {
        return rect
            .attr("x", x)
            .attr("y", y)
            .attr("height", typeof y === "function" ? i => yScale(0) - y(i) : i => yScale(0) - y)
            .attr("width", xScale.bandwidth());
    }

    // A helper method for generating grid lines on the y-axis.
    function grid(tick) {
        return tick.append("line")
            .attr("class", "grid")
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke", "currentColor")
            .attr("stroke-opacity", 0.1);
    }

    // Call chart.update(data, options) to transition to new data.
    return Object.assign(svg.node(), {
        update(data, {
            xDomain, // an array of (ordinal) x-values
            yDomain, // [ymin, ymax]
            duration = initialDuration, // transition duration, in milliseconds
            delay = initialDelay // per-element transition delay, in milliseconds
        } = {}) {
            // Compute values.
            const X = d3.map(data, d => d.category);
            const Y = d3.map(data, d => d.quantity);

            // Compute default domains, and unique the x-domain.
            if (xDomain === undefined) xDomain = X;
            if (yDomain === undefined) yDomain = [0, d3.max(Y)];
            xDomain = new d3.InternSet(xDomain);

            // Omit any data not present in the x-domain.
            const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

            // Update scale domains.
            xScale.domain(xDomain);
            yScale.domain(yDomain);

            // Start a transition.
            const t = svg.transition().duration(duration);

            // Join the data, applying enter and exit.
            rect = rect
                .data(I, function (i) { return this.tagName === "rect" ? this.key : X[i]; })
                .join(
                    enter => enter.append("rect")
                        .property("key", i => X[i]) // for future transitions
                        .call(position, i => xScale(X[i]), yScale(0))
                        .style("mix-blend-mode", "multiply")
                        .call(enter => enter.append("title")),
                    update => update,
                    exit => exit.transition(t)
                        .delay(delay)
                        .attr("y", yScale(0))
                        .attr("height", 0)
                        .remove()
                );

            // Update the title text on all entering and updating bars.
            rect.select("title")
                .text(i => [X[i], format(Y[i])].join("\n"));

            // Transition entering and updating bars to their new position. Note
            // that this assumes that the input data and the x-domain are in the
            // same order, or else the ticks and bars may have different delays.
            rect.transition(t)
                .delay(delay)
                .call(position, i => xScale(X[i]), i => yScale(Y[i]));

            // Transition the x-axis (using a possibly staggered delay per tick).
            xGroup.transition(t)
                .call(xAxis)
                .call(g => g.selectAll(".tick").delay(delay))
                .attr("transform", `translate(0,${height - marginBottom})`)
                .attr("class", "fonts")
                .selectAll("text")
                .attr("transform", `translate(-10,10)rotate(-45)`)
            // Transition the y-axis, then post process for grid lines etc.
            yGroup.transition(t)
                .call(yAxis)
                .selection()
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick").selectAll(".grid").data([,]).join(grid));
        }
    });
}


var alphabet = []
d3.csv("Data/1995_2021.csv", function (d) {
    var information = {
        category: d.category,
        quantity: parseInt(d.quantity)
    }
    alphabet.push(information)
});

setTimeout(() => {
    draw.innerHTML = ""
    chart = BarChart(alphabet.slice(0, 50), {
        yLabel: "↑ Frequency",
        width: 1200,
        height: 500,
        color: "steelblue",
        duration: 750 // slow transition for demonstration
    })
}, 100);

var draw = document.querySelector("#histogram")

draw.addEventListener("mouseenter", function (event) {
    for (var i = 0; i < 7; i++) {
        setTimeout(() => {
        }, 300);
        update = chart.update(alphabet.slice(0, 50 + i), {
            yLabel: "↑ Frequency",
            width: 1200,
            height: 500,
            color: "steelblue",
            duration: 750 // slow transition for demonstration
        })
    }
}, {
    once: true // This will fire the event once and remove it afterwards
})

draw.addEventListener("mouseout", function (event) {
    setTimeout(() => {
        draw.innerHTML = ""
        chart = BarChart(alphabet.slice(0, 56), {
            yLabel: "↑ Frequency",
            width: 1200,
            height: 500,
            color: "steelblue",
            duration: 750 // slow transition for demonstration
        })
    }, 10);
})



