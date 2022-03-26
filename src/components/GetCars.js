import Cheerio from 'cheerio';
import React,{Component} from 'react';
import rp from 'request-promise';


 // rp('https://cors-anywhere.herokuapp.com/https://hotwheels.fandom.com/wiki/List_of_2017_Hot_Wheels').then(html => console.log(html));
  

 class GetCars extends Component {
  state = { 
    list:[]
  };
  

  componentDidMount() {
    const year = new Date();
    
    for (let index = 2011; index <= 2012; index++) {
      // use the request-promise library to fetch the HTML from pokemon.org
      rp('https://cors-anywhere.herokuapp.com/https://hotwheels.fandom.com/wiki/List_of_'+index+'_Hot_Wheels')
        .then(html => {
          let list = [];

          let $ = Cheerio.load(html);
          // find what element ids, classes, or tags you want from opening console in the browser
          // cheerio library lets you select elements similar to querySelector
          $("#mw-content-text .wikitable tbody tr").each(function(i, element) {
            if($(this).find("td").length == 5){
              let concat = ('{"id_toy_f":"' + $(this).find("td").eq(0).text() +'","name_f":"' + $(this).find("td").eq(2).text().replaceAll("\"", "") +'","series_f":"' + $(this).find("td").eq(3).text().replaceAll("\"", "") +'","photo_f":"' + $(this).find("td").eq(4).find("a").attr("href")+'","year":"'+ index+'"}').replace(/(\r\n|\n|\r)/gm, "");
              console.log(concat);
              const obj_concat = JSON.parse(concat);
              list.push(obj_concat);
            }
            if($(this).find("td").length == 6){
              let concat = ('{"id_toy_f":"' + $(this).find("td").eq(0).text() +'","name_f":"' + $(this).find("td").eq(2).text().replaceAll("\"", "") +'","series_f":"' + $(this).find("td").eq(3).text().replaceAll("\"", "") +'","photo_f":"' + $(this).find("td").eq(5).find("a").attr("href")+'","year":"'+ index+'"}').replace(/(\r\n|\n|\r)/gm, "");
              console.log(concat);
              const obj_concat = JSON.parse(concat);
              list.push(obj_concat);
            }
            
            //const obj_concat = JSON.parse(concat);
            //list.push(obj_concat);
            //console.log(obj_concat);
          });
          //console.log(list);
          document.getElementById("json").innerHTML += JSON.stringify(list, undefined, 2);
          this.setState({...this.state.list, list});
        })
        .catch(function(err) {
          console.log(err + "crawl failed");
        }); 
      }
      //console.log(this.state.list);
      //document.getElementById("json").innerHTML += JSON.stringify(this.state.list, undefined, 2);
    }
  render() {
    return (
      <pre id="json"></pre>
    );
  }
}

export default GetCars;