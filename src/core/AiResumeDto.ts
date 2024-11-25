import { Cv } from "./CV";

export interface AiResumeReqDto {
  text: string;
}

export interface AiResumeRspDto {
  resume: Cv;
}
