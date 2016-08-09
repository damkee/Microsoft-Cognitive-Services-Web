
/* Javascript for index.html
* Author: Sungjoon Steve Won / swon331@gmail.com / www.damkee.com
* Date: August 8, 2016
* Javascript template for using Microsoft Cognitive Services - Text Analytics
*/
function calculateSentiment(sentenceIn) {
    
    var documentsVal = [{
        "language": "en",
        "id":1,
        "text": sentenceIn
    }];
    
    var documentsKey = {
        "documents": documentsVal
    };
    
    console.log("Stringify: " + JSON.stringify(documentsKey, null, 2));
    
    
    //For Ocp-Apim-Subscription-Key, look for key (not subscription ID) from Azure
    $.ajax({
        type: 'POST',
        url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
        headers: {
            "Ocp-Apim-Subscription-Key": "yourownkey",
            "Content-Type": "application/json",
            "Accept": "application/json"},
        data: JSON.stringify(documentsKey, null, 2),
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    console.log("success 1: " + result.toString());
                    break;
                default:
                    console.log("success 2: " + JSON.stringify(result));
                    var documents = result.documents;
                    for (var i = 0; i < documents.length; i++) {
                        var iterResult = documents[i];
                        var iterScore = iterResult.score;
                        var iterId = iterResult.id;
                    }
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Error statue: " + 
                        xhr.status);
            console.log("Thrown error: " + thrownError);
        }
    });
}

calculateSentiment('I love burgers');