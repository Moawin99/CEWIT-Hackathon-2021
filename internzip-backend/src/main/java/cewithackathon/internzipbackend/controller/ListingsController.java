package cewithackathon.internzipbackend.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

@RestController
public class ListingsController {

    @RequestMapping(value="/listings", method = RequestMethod.GET)
    public ResponseEntity<List<JSONObject>> test(){
        JSONParser parser = new JSONParser();
        List<JSONObject> returnList = new LinkedList<>();


        try{
            Object obj = parser.parse(new FileReader("/Users/alexisperezmendoza/Desktop/CEWIT-Hackathon-2021/internzip-backend/src/main/java/cewithackathon/internzipbackend/data/data.json"));
            JSONObject jsonObject = (JSONObject)obj;
            JSONArray listingList = (JSONArray) jsonObject.get("Listings");

            Iterator<JSONObject> iter = listingList.iterator();
            while(iter.hasNext()){
                returnList.add(iter.next());
            }
        } catch(Exception e){
            e.printStackTrace();
        }


        return new ResponseEntity<List<JSONObject>>(returnList, HttpStatus.ACCEPTED);
    }

}
