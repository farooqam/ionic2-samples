export class NoteService {
    public notes = [
        {
          id: '1',
          date: '2017-12-11',
          title: 'Ionic 2',
          content: 'Learn the basics of Ionic 2.'
        },
        {
          id: '2',
          date: '2017-12-01',
          title: 'Firebase',
          content: 'A great backend for Ionic applications.'
        },
        {
          id: '3',
          date: '2017-12-05',
          title: 'Angular',
          content: 'A good grasp of it is crucial to developing great Ionic 2 apps.'
        }
      ];

      public addNote(note) {
        this.notes.push(note);
      }

      public deleteNote(note) {
        let index = this.notes.indexOf(note);

        if(index === -1) {
          return;
        }

        this.notes.splice(index, 1);
      }
}