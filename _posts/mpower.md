---
layout: post
title:  MPower
sub-title: Improves Battery Life
author: Jacopo
image: assets/EventoGDG005.svg
image-position: left
date: 2015-02-28
categories: eventi
tags: android battery
level: beginner
target: developer
when: 19 Marzo 2015
where: Avanzi, via Ampère 61/A, 20131 - Milano
---
Smartphone e tablet soffrono di una ridotta potenza di calcolo e **capacità delle batterie molto limitata**, dal momento che la velocità con cui si sono sviluppate le architetture per dispositivi mobili ha di gran lunga superato la tecnologia di produzione delle batterie.

L’autonomia di questi dispositivi è inoltre fortemente influenzata dai componenti hardware accesi ed utilizzati in un determinato momento (come ad esempio i moduli Wi-Fi, GPS, ecc.), dal modo in cui l’utente utilizza il dispositivo e dalle condizioni esterne (come ad esempio l’intensità del segnale GSM).

Al fine di permettere all’utente di risparmiare più energia possibile senza però rinunciare alle funzionalità di cui ha bisogno, diventa necessario **stimare la durata della batteria in maniera accurata**: un modo pratico per farlo è quello di modellare l’andamento del livello di carica nel tempo, andando a quantificare il periodo che intercorre tra l’istante attuale e quello in cui il livello raggiungerà lo zero.

La metodologia proposta si concentra sulla **modellazione del comportamento dei componenti hardware** di un dispositivo, a partire da statistiche di utilizzo provenienti dagli stessi dispositivi nel loro reale contesto di utilizzo. Quello pensato è quindi un sistema **flessibile e adattivo** in grado inoltre di considerare effetti di degrado della batteria.

Queste considerazioni hanno portato allo sviluppo di MPower, un app Android che si occupa di stimare l'effettiva durata in minuti della batteria profilando le abitudini dell'utente e fornendo la possibilità di configurare automaticamente il dispositivo in base alla necessità di durata e configurazione (connettività dati, GPS, ...).

Nella progettazione e nell’implementazione dell’app si è mantenuto un occhio di riguardo specifico allo sviluppo di tecniche e linee guida di “low power sensing”, in modo da impattare il meno possibile sullo stato dei dispositivi e anticipando la grande importanza che Android - dalla sua ultima versione, con Project Volta - dedica a tali tematiche.

**Registrazione:** [MPower: Improves Battery Life](https://www.eventbrite.it/e/biglietti-mpower-improves-battery-life-15942752201)

**Repository:** [bit.ly/eventi-gdg-milano](http://bit.ly/eventi-gdg-milano)