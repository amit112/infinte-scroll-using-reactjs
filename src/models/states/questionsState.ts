import { Question } from "../questions";
import { QuestionDetailsProps } from './../props/questionDetailsProps';

  
 export interface QuestionsState {
    questions: Question[];
    loading: boolean,
    page: number,
    pageSize: number,
    prevY: number,
    showDetails: boolean;   
    questionDetails: QuestionDetailsProps;
    hasMoreData: boolean;

}
 