### Esercizio

Usando l’array dei post fornito con le relative immagini, creare un file di routing (`routers/posts.js`) che conterrà le rotte necessario per l’entità `post`.
All’interno creare le rotte per le operazioni CRUD (_Index, Show, Create, Update e Delete)_
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:
Se viene chiamata `/posts` col verbo `GET` ci aspettiamo “Lista dei post”;
Se viene chiamato `/posts/1` col verbo `DELETE` ci aspettiamo “Cancellazione del post 1"
e via dicendo…
Registrare il router dentro `app.js` con il prefisso `posts/`.

### Bonus

- Provare a restituire la lista dei post dalla rotta _index_, in formato `json`
- Provare a restituire un singolo post dalla rotta _show,_ sempre in formato `json`

---

### Esercizio

**Milestone 1**
Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.

- Impostiamo il verbo e l’endpoint corretti
- Selezioniamo il tab body e scegliamo il formato raw e JSON
- Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
  _Nota: se vogliamo avere delle immagini, inventiamole pure._
  _Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo._
  **Milestone 2**
  Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
  Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log`
  **Milestone 3**
  Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
  Testiamolo con postman.
  **Milestone 4**
  Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.

---

Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.

- Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.
