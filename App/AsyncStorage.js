var aStorage = AsyncStorage;


export default AsyncStorage ={
    getItem:function(key){
        try {
            const value = aStorage.getItem(key);
            if (value !== null){
                return value;
            }
        } catch (error) {
        // Error retrieving data
        }
    },
    setItem:function(key,value){
        try {
         aStorage.setItem(key,value);
        } catch (error) {
        // Error saving data
        }
    },
    getItemFromJSON:function(key){
        try {
            const value = aStorage.getItem(key);
            if (value !== null){
                return JSON.parse(value);
            }
        } catch (error) {
        // Error retrieving data
        }
    },
    setItemAsJSON:function(key,value){
        try {
         aStorage.setItem(key,JSON.stringify(value));
        } catch (error) {
        // Error saving data
        }
    }

}


