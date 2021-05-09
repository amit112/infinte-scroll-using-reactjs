import { Owner } from "../questions";

export interface QuestionDetailsProps {
    tags: string[];
    owner: Owner;
    is_answered: boolean;
    view_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date: number;
    question_id: number;
    content_license: string;
    link: string;
    title: string;
    hidePopup: Function;
    showPopup: boolean;
}