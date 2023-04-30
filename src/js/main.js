const app = Vue.createApp({
    data() {
        return {
            visibilityData: {
                darkMode: {
                    area: "darkMode",
                    logo: "assets/logo/darkMode.png"
                },
                refresh: {
                    area: "refresh",
                    logo: "assets/logo/refresh.png"
                },
                more: {
                    area: "more",
                    logo: "assets/logo/more.png"
                },
                histogram1: {
                    name: "柱状图1",
                    area: "histogram1",
                },
                histogram2: {
                    name: "柱状图2",
                    area: "histogram2",
                },
                pieChart: {
                    // name: "饼图",
                    area: "pieChart",
                },
                feature: {
                    name: "简单快速性能强劲",
                    area: "feature",
                },
                profile: {
                    name: "煮个面都得βββββββββββββββββββ",
                    area: "profile",
                    svgImage: '<svg width="209" height="41" viewBox="0 0 209 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 35C58.3333 35.8333 145.5 35 203 6.5" stroke="#43E229" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" id="tick" /></svg>',
                },
                summary: {
                    name: "基于VUE的大数据可视化系统",
                    area: "summary",
                },
                brag: {
                    name: "这个系统天下第一111",
                    area: "brag",
                },
                uploadSpeed: {
                    name: "150KB/S",
                    area: "uploadSpeed",
                },
                downloadSpeed: {
                    name: "9981GB/S",
                    area: "downloadSpeed",
                },
                CPU_usage: {
                    // name: "CPU使用率",
                    area: "CPU_usage",
                },
                Memory_usage: {
                    // name: "内存使用率",
                    area: "Memory_usage",
                },
            }
        }
    }
}).mount('#mainBox')