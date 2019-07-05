var tags = {
    DESCRIPTION : false,
    PURPOSE : false,
    WISH : false,
    STAR : false,
    NATURE : false,
    NAME : false,
    TITLE : false,
    EMOTIONS : false,
    KING : false,
    PLACE  : false,
    NATURE  : false,
    SUBJECT : false,
    VERSE_NUMBER : false,
    TYPE : false,
    ORIGINAL : false,
    OVERVIEW  : false,
    MEANING_OF_TEXT : false,
    DIVISIONS : false,
    SUBDIVISIONS  : false,
    WORD_MEANING : false,
    SPECIAL_MEANING : false,
    REFERENCES : false,
    GLOSSARY : false,
    ALLIED_TEXTS  : false,
    DETAILS_OF_INCIDENTS  : false,
    STORIES_AND_ANECDOTES  : false,
    TOPICS_REFERENCE_WITH_OTHER_BOOKS : false, 
    UNIQUE_REPRESENTATION : false,
    PROVERB  : false,
    METER : false,
    NAME_MUSICAL_INSTRUMENTS : false, 
    MUSICAL_INSTRUMENTS  : false,
    CITATION : false,
    HISTORICAL_INFORMATION : false,
    COLLECTION : false,
    DEITY : false,
    CHARACTERESTICS : false,
    NUMBERS : false,
    RELATIONS_EXPRESSED : false,
    CHILDREN  : false,
    COMPANION : false,
    FAMILY_MEMBER  : false,
    NATURE : false,
    USED_FOR_TRANSPORTATION : false,
    CELESTIAL_BODIES : false,
    ANIMAL_AS_TRANSPORT  : false,
    RITUALS : false,
    PURPOSE_OF_RECITATION : false, 
    DESIRE : false,
    TIME : false,
    STARS : false,
    TEMPLES : false,
    FESTIVAL : false,
    METAPHORICAL_REFERENCE : false,
    DIGITAL_FORMATS : false,
    NEWS : false,
    AUDIO : false,
    WEBSITE_LINK : false,
    TRADITIONAL : false,
    WARRIORS : false,
    POSITION_IN_ARMY : false,
    REFERING_DYNASTY : false,
    CONNOTATION : false,
    }

function getKey(objVal)
{
    var flag = 1;

    Object.keys(objVal).forEach(function (key){
        if(key !== 'id' && flag === 1){
            flag = 0;
            secondKey = key;
        }
        });
        flag = 1;
        return secondKey;

}
function markDuplicate(key, value, numResults, data,id)
{
    var i =0;
    for(;i<numResults;i++)
    {
        // console.log(secondKey)
        vari = data.response.docs[i];
        console.log(id)
        secondKey = getKey(vari);
        if(vari[secondKey][0] === value && key === secondKey && vari['id'] !== id )
            // console.log('works')
            tags[secondKey] = true
    }
    
    
}
function myFunction() {
    
    var data = document.getElementById("input").value;
    var Url = 'http://localhost:8983/solr/annotations/select?q=' + encodeURIComponent(data) ;

    jQuery.ajax({
        url: Url,
        success: function(data){
            // console.log(data)
            // document.getElementById('json').innerHTML = JSON.stringify(data.response.docs[0], undefined, 2);
            var numResults = data.response.numFound;
            $("#output").empty();
            var vari;
            var i;
            var secondKey;
            // console.log(numResults)
            for(i=0; i < numResults; i++)
            {
                vari = data.response.docs[i];
                secondKey = getKey(vari);
                console.log(secondKey +'-'+vari[secondKey])
                // console.log(tags[secondKey])
                if(!tags[secondKey])
                {
                    $("#output").append(secondKey +'-'+vari[secondKey]+"\n\n")
                    markDuplicate( secondKey, vari[secondKey][0],numResults, data, vari['id']);
                }
            }
        },
        dataType: 'jsonp',
        jsonp: 'json.wrf'
      });
      Object.keys(tags).forEach(function (key){
        tags[key]=false;
      });
}
