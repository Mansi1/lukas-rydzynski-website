import React from "react"
import { getNsTrans } from "../../functions/getNsTrans"
import { MAIN_MY_PROMISE_HASH } from "../../routes"
const Trans = getNsTrans("main")

export const MyPromise = () => {
  return (
    <div>
      <h2 id={MAIN_MY_PROMISE_HASH}>
        <Trans>Mein Versprechen</Trans>
      </h2>
      <p>
        <Trans>
          Auffinden von optimalen Kreditkonditionen, individuelle Anpassung
          eines Angebots, breite Möglichkeiten des Finanzmanagements oder
          schließlich der endgültige Abschluss einer Transaktion geben mir nicht
          nur große Zufriedenheit, sondern bestätigen mich darin, etwas
          Sinnvolles zu tun!
        </Trans>
      </p>
      <p>
        <Trans>
          Dank meiner Kunden habe ich das Vergnügen, die Welt neu zu entdecken.
          Ich schätze die Möglichkeit, an der Verwirklichung ihrer Wünsche und
          Umsetzung konkreter Pläne mitwirken zu können, sehr - seien es
          private, Lebens- aber auch berufliche Pläne.
        </Trans>
      </p>
      <p>
        <Trans>
          Zusammenarbeit nach den Prinzipien des gegenseitigen Respekts, Achtung
          von Werten sowie eine individuelle Herangehensweise sind die
          wichtigsten Elemente, die mich bei der Erfüllung meiner beruflichen
          Tätigkeit leiten.
        </Trans>
      </p>
      <p>
        <Trans>Nehmen Sie gerne Kontakt mit mir auf.</Trans>
      </p>
    </div>
  )
}
