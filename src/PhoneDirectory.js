import React, { useState } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function PhoneDirectory() {
  const [subscribersList, setSubscribersList] = useState([
    {
      id: 1,
      name: "Shilpa Bhat",
      phone: "9999999999",
    },
    {
      id: 2,
      name: "Srishti Gupta",
      phone: "8888888888",
    },
  ]);

  const deleteSubscriberHandler = (subscriberId) => {
    let subscriberIndex = 0;
    subscribersList.forEach(function (subscriber, index) {
      if (subscriber.id === subscriberId) {
        subscriberIndex = index;
      }
    });
    let newSubscribers = subscribersList;
    newSubscribers.splice(subscriberIndex, 1);
    setSubscribersList(newSubscribers);
  };

  const addSubscriberHandler = (newSubscriber) => {
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    setSubscribersList(subscribersList);
  };

  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={(props) => (
            <ShowSubscribers
              {...props}
              subscribersList={subscribersList}
              deleteSubscriberHandler={(subscriberId) =>
                deleteSubscriberHandler(subscriberId)
              }
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={({ history }, props) => (
            <AddSubscriber
              history={history}
              {...props}
              addSubscriberHandler={(newSubscriber) =>
                addSubscriberHandler(newSubscriber)
              }
            />
          )}
        />
      </div>
    </Router>
  );
}
