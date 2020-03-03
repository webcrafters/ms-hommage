export interface LinkItem {
  text: string;
  href: string;
}

export interface LinkSection {
  title: string;
  items: LinkItem[];
}

export interface LandingPageLinksModel {
  link_sections: LinkSection[];
}
