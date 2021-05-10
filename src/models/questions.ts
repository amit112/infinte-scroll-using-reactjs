
    export interface Owner {
        reputation: number;
        user_id: number;
        user_type: string;
        accept_rate: number;
        profile_image: string;
        display_name: string;
        link: string;
    }

    export interface Question {
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
        body: string;
    }

    export interface GetQuestionsResponse {
        items: Question[];
        has_more: boolean;
        quota_max: number;
        quota_remaining: number;
    }



