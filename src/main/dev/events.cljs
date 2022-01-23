(ns dev.events
  (:require
   [re-frame.core :as re-frame]
   [dev.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(re-frame/reg-event-db
::update-name
 (fn [db [_ val]]
   (assoc db :name val)))