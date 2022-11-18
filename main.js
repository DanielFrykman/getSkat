
/**
 * Pulls the rate for tax-free driving allowance from skat.dk.
 * Pulls the rate for driving in own car after 20.000km/year.
 * Returns the rate as a number with a, as a decimal point.
 * 
 * Henter satsen for skattefri kørselsgodkørelse fra skat.dk.
 * Henter satsen for kørsel i egen bil over 20.000km/år.
 * Returnerer satsen som et nummer med et , som decimalpuunkt.
 */
function getSkatdk() {
  var url = "https://skat.dk/data.aspx?oid=2234870"
  var websiteContent = UrlFetchApp.fetch(url).getContentText();
  Logger.log(websiteContent);

  //finds "Egen cykel, knallert eller EU-knallert" i the html and includes the 32 characters before that. 
  //finder "Egen cykel, knallert eller EU-knallert" i html koden og går 32 tegn/mellemrum tilbage.
  var RegExp1 = new RegExp(/(.{32})(Egen cykel, knallert eller EU-knallert)/gm); 
  
  // extracts the numbers
  //tager tallet ud
  var RegExp2 = new RegExp(/(\d+,\d+)/gm); 
  
  var matchText = websiteContent.match(RegExp1);
  var matchText2 = matchText[0].match(RegExp2);

  //should be commented out if the decimal point should be . instead of ,
  //skal udkommentares ud hvis decimal punktet skal være . istedet for ,
  matchText2 = Number(matchText2[0].replace(/,/g, '.'))
  
  return matchText2;
}



