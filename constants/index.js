export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
]

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
]

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
]

export const mapHeader = {
  contents: "./navbar",
  navContents: {
    left: { comp: "./left-nav", title: "Left Nav" },
    right: { comp: "./right-nav", title: "right Nav" },
    center: { comp: "./center-nav", title: "center Nav" },
  },
}

export const mapHeader2 = {
  contents: "./navbar",
  navContents: {
    left: { comp: "./left-nav", title: "Left Nav" },
    right: { comp: "./right-nav", title: "right Nav" },
    center: { comp: "./center-nav", title: "center Nav" },
  },
}

export const mapHeader3 = {
  contents: "./navbar",
  navContents: {
    left: { comp: "./left-nav", title: "Left Nav" },
    right: { comp: "./right-nav", title: "right Nav" },
    center: { comp: "./center-nav", title: "Lcentereft Nav" },
  },
}

export const headerContents = {
  contents: "./navbar",
}

export const headerContents2 = {
  contents: "./navbar",
}

export const headerContents3 = {
  contents: "./navbar",
}

export const navContents = {
  left: "./left-nav",
  right: "./right-nav",
  center: "./center-nav",
}

export const navContents2 = {
  left: "./left-nav",
  right: "./left-nav",
  center: "./left-nav",
}

export const navContents3 = {
  left: "./right-nav",
  right: "./right-nav",
  center: "./right-nav",
}
