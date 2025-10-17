using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        // 若已有数据则跳过
        if (await context.Activities.AnyAsync()) return;

        var activities = new List<Activity>
        {
            new()
            {
                Title = "北京三里屯咖啡聚会",
                Date = DateTime.Now.AddMonths(-2),
                Description = "在三里屯太古里一同品鉴精品咖啡，分享手冲与烘焙心得。",
                Category = "餐饮",
                City = "北京",
                Venue = "北京市朝阳区三里屯太古里",
                Latitude = 39.933,
                Longitude = 116.455
            },
            new()
            {
                Title = "上海外滩夜跑",
                Date = DateTime.Now.AddMonths(-1).AddDays(-3),
                Description = "沿黄浦江外滩步道夜跑5公里，呼吸江风，享受城市夜景。",
                Category = "运动",
                City = "上海",
                Venue = "上海市黄浦区外滩",
                Latitude = 31.240,
                Longitude = 121.490
            },
            new()
            {
                Title = "成都火锅品鉴会",
                Date = DateTime.Now.AddDays(-20),
                Description = "不同辣度底料对比试吃，分享苍蝇馆子与网红店口味差异。",
                Category = "美食",
                City = "成都",
                Venue = "成都市锦江区春熙路附近",
                Latitude = 30.658,
                Longitude = 104.081
            },
            new()
            {
                Title = "杭州西湖骑行",
                Date = DateTime.Now.AddDays(-7),
                Description = "环西湖绿道骑行15公里，途中打卡断桥与雷峰塔。",
                Category = "户外",
                City = "杭州",
                Venue = "杭州市西湖风景名胜区",
                Latitude = 30.240,
                Longitude = 120.150
            },
            new()
            {
                Title = "深圳科技沙龙",
                Date = DateTime.Now.AddDays(3),
                Description = "AI 与云原生趋势分享，讨论大模型在企业内的落地经验。",
                Category = "科技",
                City = "深圳",
                Venue = "深圳市南山区科技园",
                Latitude = 22.540,
                Longitude = 113.947
            },
            new()
            {
                Title = "广州珠江夜游",
                Date = DateTime.Now.AddDays(10),
                Description = "乘船夜游珠江，欣赏小蛮腰与两岸灯光秀。",
                Category = "旅行",
                City = "广州",
                Venue = "广州市海珠广场码头",
                Latitude = 23.120,
                Longitude = 113.260
            },
            new()
            {
                Title = "西安城墙夜游",
                Date = DateTime.Now.AddDays(14),
                Description = "古城墙夜间漫步，体验钟鼓楼与古都风韵。",
                Category = "文化",
                City = "西安",
                Venue = "西安市永宁门（南门）",
                Latitude = 34.261,
                Longitude = 108.948
            },
            new()
            {
                Title = "重庆轻轨观景",
                Date = DateTime.Now.AddDays(21),
                Description = "乘坐2号线打卡李子坝穿楼，体验山城立体交通。",
                Category = "观光",
                City = "重庆",
                Venue = "重庆市李子坝站",
                Latitude = 29.544,
                Longitude = 106.540
            },
            new()
            {
                Title = "青岛啤酒节聚会",
                Date = DateTime.Now.AddMonths(1),
                Description = "畅饮扎啤，品尝海鲜烧烤，感受海滨城市夏日夜生活。",
                Category = "节日",
                City = "青岛",
                Venue = "青岛市崂山区世纪广场",
                Latitude = 36.070,
                Longitude = 120.420
            },
            new()
            {
                Title = "苏州园林写生",
                Date = DateTime.Now.AddMonths(2),
                Description = "在拙政园进行国画/速写写生活动，体会江南园林之美。",
                Category = "艺术",
                City = "苏州",
                Venue = "苏州市姑苏区拙政园",
                Latitude = 31.330,
                Longitude = 120.630
            }
        };

        await context.Activities.AddRangeAsync(activities);
        await context.SaveChangesAsync();
    }
}
