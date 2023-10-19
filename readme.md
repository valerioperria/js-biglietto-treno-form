### ESERCIZIO
**Calcolo del prezzo del biglietto del treno**
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
- MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

**Raccolta dati**
1. Chiedre il nome dell'utente
2. Chiedere quanti chilometri deve percorrere l'utente
3. Chiedere quanti anni ha l'utente

**Logica programma**
1. Creare un input dove inserire il nome
2. Creare un input dove inserire il numero di chilometri
3. Creare un input dove inserire l'età
4. Creare un bottone che avvii il calcolo
5. Creare un bottone che annulli l'operazione
6. Calcolare 0.21 € a chilometro
7. SE ha meno di 18 anni applicare il 20% di sconto
8. SE ha dai 65 anni in su applicare il 40% di sconto
9. Riportare il prezzo in massimo 2 decimali
10. Creare un numero Rndom da 1 a 20
11. Creare un numero Random da 1 a 99999

**Output**
1. Nome del passeggero (HTML)
2. Offerta
3. Carrozza
4. Codice CP
5. Prezzo del biglietto (HTML)