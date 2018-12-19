export class NewQuestion {

   constructor(
      public id: number,
      public question: string,
      public tag: string,
      public answer?: string,
      public company?: string,
      public interviewer?: string,
   ) { }

}
