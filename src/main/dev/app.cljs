(ns dev.app
  (:require
   [shadow.react-native :refer (render-root)]
   ["react-native" :as rn]
   [dev.config :as config]
   [dev.events :as events]
   [re-frame.core :as re-frame]
   [reagent.core :as r]))

;; must use defonce and must refresh full app so metro can fill these in
;; at live-reload time `require` does not exist and will cause errors
;; must use path relative to :output-dir


(def styles
  ^js (-> {:container
           {:flex 1
            :backgroundColor "#fff"
            :alignItems "center"
            :justifyContent "center"}
           :title
           {:fontWeight "bold"
            :fontSize 24
            :color "blue"}}
          (clj->js)
          (rn/StyleSheet.create)))

(defn root []
  [:> rn/View {:style (.-container styles)}
   [:> rn/Text {:style (.-title styles)} "Hello dev"]])

(defn start
  {:dev/after-load true}
  []
  (render-root "AwesomeProject" (r/as-element [root])))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (start))
