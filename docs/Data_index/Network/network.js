am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    var data = {
        value: 0,
        children: [
            {
                'name': '新能源车',
                'children': [{ 'name': '新能源客车', 'value': 12.39 },
                { 'name': '新能源汽车产业', 'value': 7.62 },
                { 'name': '混合动力汽车', 'value': 5.38 },
                { 'name': 'FCEV', 'value': 4.94 },
                { 'name': '氢燃料电池', 'value': 3.88 },
                { 'name': '纯电动汽车', 'value': 3.77 },
                { 'name': '新能源汽车专用号牌', 'value': 3.7 },
                { 'name': '新能源汽车号牌', 'value': 3.7 },
                { 'name': 'HEV', 'value': 3.57 },
                { 'name': '柴油', 'value': 3.37 },
                { 'name': 'LPG', 'value': 3.23 },
                { 'name': '液化天然气', 'value': 3.09 },
                { 'name': 'LNG', 'value': 3.09 },
                { 'name': '燃料电池车', 'value': 2.33 },
                { 'name': '电动物流车', 'value': 2.33 },
                { 'name': '压缩天然气', 'value': 2.3 },
                { 'name': '观光车', 'value': 2.15 },
                { 'name': '液化石油气', 'value': 2.07 },
                { 'name': '北京公交集团', 'value': 2.04 },
                { 'name': '燃料电池技术', 'value': 2.02 },
                { 'name': '新能源汽车产业发展规划（2021—2035年）', 'value': 1.92 },
                { 'name': '丰田汽车', 'value': 1.88 },
                { 'name': '脱硫催化剂', 'value': 1.79 },
                { 'name': '电动公交车', 'value': 1.48 },
                { 'name': '通用汽车公司', 'value': 1.45 },
                { 'name': 'BEV', 'value': 1.27 },
                { 'name': '关于加快电动汽车充电基础设施建设的指导意见', 'value': 1.22 },
                { 'name': '生物质能', 'value': 1.18 },
                { 'name': '柴油发动机', 'value': 1.16 },
                { 'name': '中国汽车技术研究中心', 'value': 1.14 },
                { 'name': '中国汽车产业发展国际论坛', 'value': 1.09 },
                { 'name': '日本国土交通省', 'value': 1.05 },
                { 'name': '汽车发动机', 'value': 0.9 },
                { 'name': '中国长安', 'value': 0.79 },
                { 'name': '国务院办公厅', 'value': 0.74 },
                { 'name': '二氧化碳', 'value': 0.71 },
                { 'name': '嘉定', 'value': 0.69 },
                { 'name': '深圳', 'value': 0.28 },
                { 'name': '羊城', 'value': 0.21 }]
            },
            {
                'name': '汽车蓄电池',
                'children': [{ 'name': '铅酸蓄电池', 'value': 10.34 },
                { 'name': '镍氢充电电池', 'value': 9.52 },
                { 'name': '铅蓄电池', 'value': 6.25 },
                { 'name': '电解液', 'value': 4.76 },
                { 'name': '导电涂层', 'value': 3.57 },
                { 'name': '磷酸亚铁锂', 'value': 3.03 },
                { 'name': '磷酸铁锂电池', 'value': 2.44 },
                { 'name': '镍镉电池', 'value': 2.22 },
                { 'name': '蒸馏水', 'value': 2.13 },
                { 'name': '铅锑合金', 'value': 2.13 },
                { 'name': '汽车发电机', 'value': 1.47 },
                { 'name': '锂', 'value': 1.16 }]
            },
            {
                'name': '新能源产业',
                'children': [{ 'name': '非化石能源', 'value': 13.79 },
                { 'name': '可再生能源', 'value': 13.1 },
                { 'name': '常规能源', 'value': 11.9 },
                { 'name': '化石能源', 'value': 9.26 },
                { 'name': '水能', 'value': 5.88 },
                { 'name': '太阳能', 'value': 4.61 },
                { 'name': '生物质能', 'value': 4.31 },
                { 'name': '生物能', 'value': 4.31 },
                { 'name': '风能', 'value': 3.25 },
                { 'name': '太阳热水器', 'value': 3.12 },
                { 'name': '农林废弃物', 'value': 3.12 },
                { 'name': '生物能资源', 'value': 2.7 },
                { 'name': '中国风能协会', 'value': 2.7 },
                { 'name': '海洋能', 'value': 2.63 },
                { 'name': '非可再生能源', 'value': 2.63 },
                { 'name': '潮汐能', 'value': 2.27 },
                { 'name': '核聚变能', 'value': 1.64 },
                { 'name': '太阳能光伏发电', 'value': 1.61 },
                { 'name': '生物大灭绝', 'value': 1.12 }]
            },
            {
                'name': '新能源',
                'children': [
                    { 'name': '能源革命', 'value': 15.38 },
                    { 'name': '常规能源', 'value': 13.56 },
                    { 'name': '可再生能源', 'value': 12.75 },
                    { 'name': '新能源技术', 'value': 10.96 },
                    { 'name': '清洁能源', 'value': 10.32 },
                    { 'name': '潮汐发电', 'value': 6.59 },
                    { 'name': '太阳能', 'value': 5.56 },
                    { 'name': '未来能源', 'value': 5.56 },
                    { 'name': '海洋能', 'value': 5.38 },
                    { 'name': '能源', 'value': 5.15 },
                    { 'name': '化石能源', 'value': 3.95 },
                    { 'name': '氢能', 'value': 3.77 },
                    { 'name': '风能', 'value': 3.52 },
                    { 'name': '生物质能', 'value': 2.92 },
                    { 'name': '潮汐能', 'value': 2.8 },
                    { 'name': '核聚变能', 'value': 2.5 },
                    { 'name': '大盐湖', 'value': 2.5 },
                    { 'name': '核电', 'value': 2.11 },
                ]
            },
            {
                'name': '新能源技术',
                'children': [{ 'name': '传统能源', 'value': 13.04 },
                { 'name': '可再生能源', 'value': 9.89 },
                { 'name': '超导磁储能装置', 'value': 7.32 },
                { 'name': '海洋能', 'value': 4.27 },
                { 'name': '磁流体发电', 'value': 3.12 },
                { 'name': '太阳能', 'value': 3.11 },
                { 'name': '地热发电', 'value': 2.73 },
                { 'name': '潮汐能', 'value': 2.15 },
                { 'name': '纯电动汽车', 'value': 1.71 },
                { 'name': '高温超导材料', 'value': 1.69 },
                { 'name': '氢燃料电池', 'value': 1.67 },
                { 'name': '海水温差能', 'value': 1.56 },
                { 'name': '热带地区', 'value': 0.86 }]
            },
            {
                'name': '纯电动汽车',
                'children': [{ 'name': '纯电动轿车', 'value': 29.29 },
                { 'name': '电动汽车电动机', 'value': 10.08 },
                { 'name': '混合动力电动汽车', 'value': 8.47 },
                { 'name': '开关磁阻电动机', 'value': 6.06 },
                { 'name': '永磁无刷电动机', 'value': 3.96 },
                { 'name': '电动公交车', 'value': 3.6 },
                { 'name': '直流无刷电动机', 'value': 3.45 },
                { 'name': '电动机', 'value': 3.45 },
                { 'name': '直接转矩控制', 'value': 3.39 },
                { 'name': '电动汽车电池', 'value': 3.33 },
                { 'name': '锂电池', 'value': 3.18 },
                { 'name': '交流电动机', 'value': 3.03 },
                { 'name': '无刷电机', 'value': 3.0 },
                { 'name': '无刷直流电动机', 'value': 3.0 },
                { 'name': '锂离子电池', 'value': 2.7 },
                { 'name': '功率密度', 'value': 2.33 },
                { 'name': '直流电动机', 'value': 2.22 },
                { 'name': '燃料电池汽车', 'value': 2.22 },
                { 'name': '充电站', 'value': 2.19 },
                { 'name': '充电桩', 'value': 1.95 },
                { 'name': '镍氢', 'value': 1.9 },
                { 'name': '钠硫电池', 'value': 1.89 },
                { 'name': '异步电动机', 'value': 1.69 },
                { 'name': '感应电动机', 'value': 1.69 },
                { 'name': '差速器', 'value': 1.68 },
                { 'name': '离合器', 'value': 1.64 },
                { 'name': '串励电动机', 'value': 1.5 },
                { 'name': '锂聚合物电池', 'value': 1.15 },
                { 'name': '19世纪', 'value': 1.14 },
                { 'name': '二次电池', 'value': 1.12 },
                { 'name': '铅酸蓄电池', 'value': 1.08 },
                { 'name': '燃料电池电动汽车', 'value': 1.08 },
                { 'name': '车载监控', 'value': 1.03 },
                { 'name': '变速箱', 'value': 1.02 },
                { 'name': '感应电机', 'value': 0.98 },
                { 'name': '变结构控制', 'value': 0.95 },
                { 'name': '灵活', 'value': 0.9 },
                { 'name': '纯电动乘用车', 'value': 0.89 },
                { 'name': '氢燃料电池', 'value': 0.88 },
                { 'name': '纯电动客车', 'value': 0.88 },
                { 'name': '悬架', 'value': 0.81 },
                { 'name': '车载电源', 'value': 0.79 },
                { 'name': '铅酸电池', 'value': 0.76 }]
            },
            {
                'name': '锂离子电池',
                'children': [{ 'name': '锂电池', 'value': 15.45 },
                { 'name': '记忆效应', 'value': 6.25 },
                { 'name': '手机电池', 'value': 5.62 },
                { 'name': '化学电池', 'value': 5.38 },
                { 'name': '斯坦利·惠廷厄姆', 'value': 4.29 },
                { 'name': '绿色电池', 'value': 3.9 },
                { 'name': '电解液', 'value': 3.85 },
                { 'name': '镍氢', 'value': 3.57 },
                { 'name': '镍镉电池', 'value': 3.53 },
                { 'name': '动力电池', 'value': 3.41 },
                { 'name': '负极', 'value': 2.9 },
                { 'name': '新型电池', 'value': 2.8 },
                { 'name': '能量密度', 'value': 2.65 },
                { 'name': '钴酸锂', 'value': 2.63 },
                { 'name': '充电器', 'value': 2.02 },
                { 'name': '电极', 'value': 1.89 },
                { 'name': '电解质', 'value': 1.61 },
                { 'name': '圆柱电池', 'value': 1.45 },
                { 'name': '镍钴锰酸锂', 'value': 1.41 },
                { 'name': '锰尖晶石', 'value': 1.39 },
                { 'name': '分解电压', 'value': 1.37 },
                { 'name': '六氟磷酸锂', 'value': 1.27 },
                { 'name': '锰酸锂', 'value': 1.16 },
                { 'name': '诺贝尔化学奖', 'value': 1.11 },
                { 'name': '磷酸铁锂', 'value': 1.11 },
                { 'name': '锂盐', 'value': 0.97 },
                { 'name': '胶体', 'value': 0.68 },
                { 'name': '凝胶', 'value': 0.59 },
                { 'name': '钝化', 'value': 0.57 }]
            }
        ]
    };

    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
    }));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 0.8
    }));

    series.get("colors").setAll({
        step: 2
    });

    series.links.template.set("strength", 0.3);

    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);


    // Make stuff animate on load
    series.appear(1000, 100);
    root._logo.dispose();
}); // end am5.ready()