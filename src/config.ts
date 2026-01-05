// 首页基本背后信息，但不显示
export const SITE = {
  website: "https://vision-lab-kit.pages.dev/", // replace this with your deployed domain
  author: "Dr.Z",
  profile: "https://vision-lab-kit.pages.dev/",
  desc: "Ophthalmology Knowledge & Practice Toolkit",
  title: "Vision LabKit",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/visionlabkit",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
