import { RecommendedVideoDto } from './recommended-video.dto';
import { VideoThumbnailDto } from './video-thumbnail.dto';
import { AuthorThumbnailDto } from './author-thumbnail.dto';
import { ChapterDto } from './chapter.dto';

export class VideoDto {
  type: string;
  title: string;
  videoId: string;
  videoThumbnails: Array<VideoThumbnailDto>;
  storyboards: object;
  description: string;
  descriptionHtml: string;
  published: number;
  publishedText: string;
  keywords: Array<string>;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  paid: boolean;
  premium: boolean;
  isFamilyFriendly: boolean;
  allowedRegions: Array<string>;
  genre: string;
  genreUrl: string;
  author: string;
  authorId: string;
  authorUrl: string;
  authorThumbnails: Array<AuthorThumbnailDto>;
  authorVerified: boolean;
  subCount: number;
  lengthSeconds: number;
  allowRatings: boolean;
  rating: number;
  isListed: boolean;
  liveNow: boolean;
  isUpcoming: boolean;
  adaptiveFormats: Array<any>;
  legacyFormats: Array<any>;
  chapters?: Array<ChapterDto>;
  captions: object;
  recommendedVideos: Array<RecommendedVideoDto>;
  dashManifest?: string;
}
