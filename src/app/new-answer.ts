export class NewAnswer {

      constructor(
         public answer: string,
         public question_id: number,
         public user_id: number,
         public upvotes: number,
         public downvotes: number,
      ) { }
   
   }