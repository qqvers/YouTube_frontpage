const videos = [
  {
    id: "1",
    title: "Ultimate Cooking Tutorial",
    channelName: "Chef Masters",
    views: "2.3M",
    postedTime: "3 days ago",
    duration: "15:30",
    thumbnail: "https://source.unsplash.com/random/1",
  },
  {
    id: "2",
    title: "Top 10 Programming Languages in 2024",
    channelName: "Code Academy",
    views: "1.1M",
    postedTime: "2 hours ago",
    duration: "12:45",
    thumbnail: "https://source.unsplash.com/random/2",
  },
  {
    id: "3",
    title: "How to Set Up a Perfect Workout Routine",
    channelName: "FitLife",
    views: "500K",
    postedTime: "1 month ago",
    duration: "20:16",
    thumbnail: "https://source.unsplash.com/random/3",
  },
  {
    id: "4",
    title: "The Secrets of Effective Studying",
    channelName: "StudySmart",
    views: "350K",
    postedTime: "1 year ago",
    duration: "9:55",
    thumbnail: "https://source.unsplash.com/random/4",
  },
  {
    id: "5",
    title: "Exploring the Depths of the Mariana Trench",
    channelName: "DeepSea",
    views: "800K",
    postedTime: "5 days ago",
    duration: "30:10",
    thumbnail: "https://source.unsplash.com/random/5",
  },
  {
    id: "6",
    title: "Ultimate Cooking Tutorial",
    channelName: "Chef Masters",
    views: "2.3M",
    postedTime: "3 days ago",
    duration: "15:30",
    thumbnail: "https://source.unsplash.com/random/6",
  },
  {
    id: "7",
    title: "Top 10 Programming Languages in 2024",
    channelName: "Code Academy",
    views: "1.1M",
    postedTime: "2 hours ago",
    duration: "12:45",
    thumbnail: "https://source.unsplash.com/random/7",
  },
  {
    id: "8",
    title: "How to Set Up a Perfect Workout Routine",
    channelName: "FitLife",
    views: "500K",
    postedTime: "1 month ago",
    duration: "20:16",
    thumbnail: "https://source.unsplash.com/random/8",
  },
  {
    id: "9",
    title: "The Secrets of Effective Studying",
    channelName: "StudySmart",
    views: "350K",
    postedTime: "1 year ago",
    duration: "9:55",
    thumbnail: "https://source.unsplash.com/random/9",
  },
  {
    id: "10",
    title: "Exploring the Depths of the Mariana Trench",
    channelName: "DeepSea",
    views: "800K",
    postedTime: "5 days ago",
    duration: "30:10",
    thumbnail: "https://source.unsplash.com/random/10",
  },
  {
    id: "11",
    title: "Ultimate Cooking Tutorial",
    channelName: "Chef Masters",
    views: "2.3M",
    postedTime: "3 days ago",
    duration: "15:30",
    thumbnail: "https://source.unsplash.com/random/11",
  },
  {
    id: "12",
    title: "Top 10 Programming Languages in 2024",
    channelName: "Code Academy",
    views: "1.1M",
    postedTime: "2 hours ago",
    duration: "12:45",
    thumbnail: "https://source.unsplash.com/random/12",
  },
  {
    id: "13",
    title: "How to Set Up a Perfect Workout Routine",
    channelName: "FitLife",
    views: "500K",
    postedTime: "1 month ago",
    duration: "20:16",
    thumbnail: "https://source.unsplash.com/random/14",
  },
  {
    id: "14",
    title: "The Secrets of Effective Studying",
    channelName: "StudySmart",
    views: "350K",
    postedTime: "1 year ago",
    duration: "9:55",
    thumbnail: "https://source.unsplash.com/random/15",
  },
  {
    id: "15",
    title: "Exploring the Depths of the Mariana Trench",
    channelName: "DeepSea",
    views: "800K",
    postedTime: "5 days ago",
    duration: "30:10",
    thumbnail: "https://source.unsplash.com/random/16",
  },
  {
    id: "16",
    title: "Ultimate Cooking Tutorial",
    channelName: "Chef Masters",
    views: "2.3M",
    postedTime: "3 days ago",
    duration: "15:30",
    thumbnail: "https://source.unsplash.com/random/17",
  },
  {
    id: "17",
    title: "Top 10 Programming Languages in 2024",
    channelName: "Code Academy",
    views: "1.1M",
    postedTime: "2 hours ago",
    duration: "12:45",
    thumbnail: "https://source.unsplash.com/random/18",
  },
  {
    id: "18",
    title: "How to Set Up a Perfect Workout Routine",
    channelName: "FitLife",
    views: "500K",
    postedTime: "1 month ago",
    duration: "20:16",
    thumbnail: "https://source.unsplash.com/random/19",
  },
  {
    id: "19",
    title: "The Secrets of Effective Studying",
    channelName: "StudySmart",
    views: "350K",
    postedTime: "1 year ago",
    duration: "9:55",
    thumbnail: "https://source.unsplash.com/random/20",
  },
  {
    id: "20",
    title: "Exploring the Depths of the Mariana Trench",
    channelName: "DeepSea",
    views: "800K",
    postedTime: "5 days ago",
    duration: "30:10",
    thumbnail: "https://source.unsplash.com/random/21",
  },
  {
    id: "21",
    title: "Ultimate Cooking Tutorial",
    channelName: "Chef Masters",
    views: "2.3M",
    postedTime: "3 days ago",
    duration: "15:30",
    thumbnail: "https://source.unsplash.com/random/22",
  },
  {
    id: "22",
    title: "Top 10 Programming Languages in 2024",
    channelName: "Code Academy",
    views: "1.1M",
    postedTime: "2 hours ago",
    duration: "12:45",
    thumbnail: "https://source.unsplash.com/random/23",
  },
  {
    id: "23",
    title: "How to Set Up a Perfect Workout Routine",
    channelName: "FitLife",
    views: "500K",
    postedTime: "1 month ago",
    duration: "20:16",
    thumbnail: "https://source.unsplash.com/random/24",
  },
  {
    id: "24",
    title: "The Secrets of Effective Studying",
    channelName: "StudySmart",
    views: "350K",
    postedTime: "1 year ago",
    duration: "9:55",
    thumbnail: "https://source.unsplash.com/random/25",
  },
  {
    id: "25",
    title: "Exploring the Depths of the Mariana Trench",
    channelName: "DeepSea",
    views: "800K",
    postedTime: "5 days ago",
    duration: "30:10",
    thumbnail: "https://source.unsplash.com/random/26",
  },
  {
    id: "26",
    title: "Ultimate Cooking Tutorial",
    channelName: "Chef Masters",
    views: "2.3M",
    postedTime: "3 days ago",
    duration: "15:30",
    thumbnail: "https://source.unsplash.com/random/27",
  },
  {
    id: "27",
    title: "Top 10 Programming Languages in 2024",
    channelName: "Code Academy",
    views: "1.1M",
    postedTime: "2 hours ago",
    duration: "12:45",
    thumbnail: "https://source.unsplash.com/random/28",
  },
  {
    id: "28",
    title: "How to Set Up a Perfect Workout Routine",
    channelName: "FitLife",
    views: "500K",
    postedTime: "1 month ago",
    duration: "20:16",
    thumbnail: "https://source.unsplash.com/random/29",
  },
  {
    id: "29",
    title: "The Secrets of Effective Studying",
    channelName: "StudySmart",
    views: "350K",
    postedTime: "1 year ago",
    duration: "9:55",
    thumbnail: "https://source.unsplash.com/random/30",
  },
  {
    id: "30",
    title: "Exploring the Depths of the Mariana Trench",
    channelName: "DeepSea",
    views: "800K",
    postedTime: "5 days ago",
    duration: "30:10",
    thumbnail: "https://source.unsplash.com/random/31",
  },
];

export default videos;