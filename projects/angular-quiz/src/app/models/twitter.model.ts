export interface SearchMetaData {
  completed_in: number;
  max_id: number;
  max_id_str: string;
  next_results: string;
  query: string;
  count: number;
  since_id: number;
  since_id_str: string;
}

export interface Status {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: {
    hashtags: string[];
    symbols: string[];
    user_mentions: string[];
    urls: [
      {
        url: string;
        expanded_url: string;
        display_url: string;
        indices: number[];
      }
    ];
  };
  metadata: {
    result_type: string;
    iso_language_code: string;
  };
  source: string;
  in_reply_to_status_id: number | null;
  in_reply_to_status_id_str: string | null;
  in_reply_to_user_id: number | null;
  in_reply_to_user_id_str: string | null;
  in_reply_to_screen_name: string | null;
  user: {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: {
      url: {
        urls: {
          url: string;
          expanded_url: string;
          display_url: string;
          indices: number[]
        }[];
      };
      description: {
        urls: string[];
      };
    };
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset: number;
    time_zone: string;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following: null;
    follow_request_sent: null;
    notifications: null;
    translator_type: string;
  };
  geo: null;
  coordinates: null;
  place: null;
  contributors: null;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
}

export interface TwitterSearchResponse {
  statuses: Status[];
  search_metadata: SearchMetaData;
}

export interface TwitterFetcher {
  author: string;
  author_data: {
    profile_url: string, profile_image: string, profile_image_2x: string, screen_name: string, name: string
  };
  image: string;
  images: string;
  permalinkURL: string;
  rt: boolean;
  tid: string;
  time: string;
  timestamp: string;
  tweet: string;
}
