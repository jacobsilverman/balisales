import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { environment } from '../../Data/Constants/index';


export const getUsersMapQuery = async () => {
    const accountsCollectionRef = collection(db, environment()+"-accounts");
    const data = await getDocs(accountsCollectionRef);

    let allData = data.docs.map(async (doc) => {
        const newData = doc.data()
        let parsedItem = { 
            address: newData?.address?.address, 
            city: newData?.address?.city, 
            state: newData?.address?.state, 
            userInfo: {
                id: doc.id, 
                icon: "",  
                displayName: newData?.displayName
            }
        };
        const storage = getStorage();
        const listRef = ref(storage, `/${environment()}-profiles/${doc.id}/`);
        parsedItem = await getDownloadURL(listRef).then((url) => {
            return { 
                address: newData?.address?.address, 
                city: newData?.address?.city, 
                state: newData?.address?.state,
                userInfo: {id: doc.id, icon: url,  displayName: newData?.displayName}
            };
        })
        .catch((error) => {
            console.error(error);
            return parsedItem;
        })
        
        return parsedItem;
    });

    return Promise.all(allData).then((result) => {
        return result;
    })
}
