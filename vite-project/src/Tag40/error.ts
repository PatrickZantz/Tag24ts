// Enum für HTML-Error-Codes
enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
  }
  
  // Funktion zur Anzeige zufälliger HTML-Fehler
  function showHtmlError(): void {
    const randomValue = Math.floor(Math.random() * 6);
    
    switch (randomValue) {
      case 0:
      case 1:
      case 2:
        console.log(`${HtmlError.OK}: ${HtmlError[HtmlError.OK]}`);
        break;
      case 3:
        console.log(`${HtmlError.Redirect}: ${HtmlError[HtmlError.Redirect]}`);
        break;
      case 4:
        console.log(`${HtmlError.BadRequest}: ${HtmlError[HtmlError.BadRequest]}`);
        break;
      case 5:
        console.log(`${HtmlError.InternalServerError}: ${HtmlError[HtmlError.InternalServerError]}`);
        break;
    }
  }
  
  // Beispielaufruf der Funktion
  showHtmlError();
  