import React, { Fragment, useState } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";
import { SubscriberCountContext } from "./SubscriberCountContext";

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
    const newSubscribers = subscribersList.filter(
      (subscriber) => subscriber.id !== subscriberId
    );
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
    <Fragment>
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
                {...props}
                addSubscriberHandler={(newSubscriber) =>
                  addSubscriberHandler(newSubscriber)
                }
              />
            )}
          />
        </div>
      </Router>

      <SubscriberCountContext.Provider value={subscribersList.length}>
        <Footer />
      </SubscriberCountContext.Provider>
    </Fragment>
  );
}
