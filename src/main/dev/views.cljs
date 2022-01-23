(ns dev.views
  (:require
   ["react-native" :as rn]
   [re-frame.core :as re-frame]
   [dev.subs :as subs]
   ))


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
  (let [name (re-frame/subscribe [::subs/name])]
  [:> rn/View {:style (.-container styles)}
   [:> rn/Text {:style (.-title styles)} "Hello !" @name]]))
