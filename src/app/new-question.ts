export class NewQuestion {

    constructor(
        public question: string = "",
            public tag: string = "",
            public company: string = "",
            public interviewer: string = "",
            public user_id: number = 1,
            public upvotes: number = 0,
            public downvotes: number = 0,
    ) { }

};
