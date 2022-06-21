import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./navbar/drawer";

export default function FriendList() {
    const [friendsBody, setFriendsBody] = useState([]);
    const [friends, setFriends] = useState(true);
    const url = "http://localhost:8080/scoops";
    

    

    useEffect(() => {
        findAll();
    }, [friends]);

    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            console.log((`${url}/friends`))
            const response = await fetch(`${url}/friends`);
            const friends = await response.json();
            console.log(friends);

            const friendsTableRows = friends.map((e) => {
                return (
                    
                   <h3> <tr>
                        <td>{e.item_name}</td>
                        <td>{e.cost}</td>
                        <td>{e.color}</td>
                    </tr></h3>
                );
            });

            setFriendsBody(friendsTableRows);
            console.log(friends);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        
        <>
        <TemporaryDrawer/>
        <table class="center">
                
                <thead>
                    <tr>
                     
                        <h2><th>Menu Item</th>
                        <th>Cost</th>
                         <th>Color</th></h2>
                        
                    </tr> 
                </thead>
                <tbody>{friendsBody}</tbody>
            </table>
        
        </>
    );
}