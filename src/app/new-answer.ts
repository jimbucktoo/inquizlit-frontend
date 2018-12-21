export class NewAnswer {

      constructor(
         public answer: string = "",
         public question_id: number = 5,
         public user_id: number = 2,
         public upvotes: number = 0,
         public downvotes: number = 0,
      ) { }
   
   };