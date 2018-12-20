export class NewAnswer {

      constructor(
         public answer: string = "",
         public question_id: number = 1,
         public user_id: number = 1,
         public upvotes: number = 0,
         public downvotes: number = 0,
      ) { }
   
   }