var options = {
  startTag : "<b class='highlight'>", // could be a hyperlink
  endTag   : "</b>" // or you could use <i> instead of <b> ... want it? ask!
}
/**
 * Want to Set the Desired Start Tag to apply to the highlight?
 * see: https://github.com/dwyl/search-result-keyword-highlighter/issues/5
 * Potential future feature ...
 */

/**
 * wraps a single string passed to it in the start and end tags of the options
 * @param {String} match - the string to be wrapped
 * @returns {String} - the string wraped
 */

function wrapper (match) {
  return options.startTag + match + options.endTag;
}

/**

 * highlight does Simple String Substitution given a set of keywords in
 * a body of text and substitutes the keyword with a marked up html Tag
 * @param {String} keywords - a string of one or more keywords
 *   separated by spaces.
 * @param {String} text - the body of text where you want to highlight keywords
 * @returns {String} text - the text with all highlights.
 */
function highlight(keywords, text) {
  var regex = keywords.split(' ');
  regex = regex.filter(function(char){
    return char !== '';
  });
  regex = regex.join('|');
  regex = regex.replace(/[-[\]{}()*+?.,\\^$]/g, "\\$&");
  var matcher = new RegExp(regex, 'gi');

  return text.replace(matcher, wrapper);
}

// keyword highlight eg
// $(function(){
//     var keywords = $('.search_keywords').val();
//     if(keywords){
//         var tilte = $('.result_title');
//         for(var i=0;i < tilte.length;i++){
//             var _tilte = $(tilte[i]).html();
//             $(tilte[i]).html(highlight(keywords,_tilte));
//         }
//         var content = $('.result_content');
//         for(var i=0;i < content.length;i++){
//             var _conten = $(content[i]).html();
//             $(content[i]).html(highlight(keywords,_conten));
//         }
//         var category = $('.result_category');
//         for(var i=0;i < category.length;i++){
//             var _category = $(category[i]).html();
//             $(category[i]).html(highlight(keywords,_category));
//         }
//         var tag = $('.result_tag');
//         for(var i=0;i < tag.length;i++){
//             var _tag = $(tag[i]).html();
//             $(tag[i]).html(highlight(keywords,_tag));
//         }
//     }
// });
