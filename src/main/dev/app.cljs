(ns dev.app
  (:require
   [shadow.react-native :refer (render-root)]
   [dev.config :as config]
   [dev.events :as events]
   [dev.views :as views]
   [re-frame.core :as re-frame]
   [reagent.core :as r]))


 (defn ^:dev/after-load start []
  (re-frame/clear-subscription-cache!)
  (render-root "CoinGuard" (r/as-element [views/root])))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (start))
