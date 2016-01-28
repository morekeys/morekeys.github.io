---
layout: post
title:  Android Security
sub-title: Focus On
author: Jacopo
image: assets/Evento001.svg
image-position: right
date: 2014-10-27
categories: eventi
tags: android nfc java
level: intermediate
target: developer
when: 13 Novembre 2014
where: Google Italia, via Confalonieri 4, Milano
---
Parliamo di sicurezza su Android con il NECST Lab del Politecnico di Milano. 
Per l'occasione saremo ospiti di Google Italia nella loro sala conferenze. 
Ci saranno due talk dei quali potete leggere il dettaglio qui di seguito! I posti sono limitati quindi prenotate in fretta il vostro ticket!

### Talk 1: Come to the Dark Side, we have Apps! (~35')
Le applicazioni Android, e in generale per dispositivi “mobile”, hanno dato vita ai cosiddetti “app store” o “marketplace”, già esistenti da molti anni ma mai utilizzate realmente.
Diversamente dalle altre piattaforme, per cui esistono al massimo un paio di app store, il caso di Android à unico nel suo genere per l’esistenza di una pletora di store alternativi. Questo rende complicato rilevare le App malevole, o “mobile malware”, e tenerne traccia. 

Identificare un’applicazione malevola in un solo market non è purtroppo sufficiente, perché altre istanze della stessa applicazione possono trovarsi negli altri centinaia di market. Per quantificare questo fenomeno abbiamo esplorato in modo esaustivo 8 market tra giugno e novembre 2013. I risultati indicano che questi market ospitano e distribuiscono un’allarmante quantità di applicazioni che fanno un uso dubbio e molto aggressivo di pubblicità e una quantità non irrilevante di malware. Alcuni market non effettuano alcun controllo sulle applicazioni caricate e non fanno una piega nemmeno quando si tenta di caricarvi del malware ben noto e in circolazione da molto tempo. 

Motivati da questi risultati preliminari abbiamo creato un set di strumenti per la ricerca automatica di istanze della stessa applicazione, o di applicazioni simili, in più market, in pochi secondi anziché in giornate e giornate, indipendentemente dalla dimensione del market. Siamo riusciti a tracciare le “strategie” di distribuzione adottate dagli autori di malware. Inoltre, abbiamo monitorato come ogni market reagisce alla presenza di nuovi malware.

Alcuni market hanno tempi di reazione dell’ordine della settimana, mentre altri, semplicemente, non reagiscono. Infine, in tre mesi di utilizzo abbiamo tracciato oltre 1,500 cancellazioni di app da 16 market. Circa l’8% di tali cancellazioni erano relative ad applicazioni che “saltavano” da un market all’altro.

### Talk 2: Grab 'n Run: Practical and Safe Dynamic Code Execution for Android (~35')
Studi recenti [Poeplau, 2014] hanno mostrato che gli sviluppatori di app, anche le più celebri e complesse (e.g., Facebook), hanno spesso l'esigenza di caricare codice dinamicamente. Tale codice può essere recuperato da un archivio remoto o locale. Questa tecnica ha indubbi vantaggi, sia perché minimizza l'uso del codice presente in memoria durante l'esecuzione (caricandolo solo quando serve) sia perché permette di implementare aggiornamenti "silenziosi", ad ovvio vantaggio dell'utente pigro che non vuole aggiornare la nostra app. In Android si può caricare codice dinamicamente tramite DexClassLoad, System.exec, o Context.createPackageContext, tutte presenti dalle prime versioni dell'API.

Purtroppo, questo meccanismo ha due principali svantaggi in termini di sicurezza. Primo, è utilizzato dagli autori di malware per bypassare controlli antivirus, servendo il codice malevolo solo dopo essere riusciti ad installare un APK apparentemente innocuo. Secondo, l'API di Android non implementa alcun controllo sull'integrità del codice caricato. Mentre lo sviluppatore che carica un APK sul Play Store è sicuro che, grazie al meccanismo di code signing, l'APK installato sul device dell'utente non sia stato modificato nel tragitto, la stessa cosa non vale per il codice caricato dinamicamente. Infatti, la Dalvik si limita a caricare ed eseguire il bytecode presente nel JAR o APK specificati dallo sviluppatore. Questo permette ad un aggressore remoto di modificare il codice caricato dinamicamente senza che il sistema se ne possa accorgere. Vulnerabilità di questo tipo sono state infatti riscontrate nel 9.25% di app presenti sul Play Store nel 2012. Secondo la nostra opinione, vulnerabilità di questo tipo, così come quelle derivanti dall'uso errato delle librerie crittografiche, esistono perché gli sviluppatori non sono tenuti ad essere esperti di sicurezza. È pertanto a carico dell'API il compito di astrarre i dettagli di sicurezza implementando le best practice in modo totalmente trasparente per lo sviluppatore. Una volta segnalate, le app vulnerabili sono state rimosse e Google ha iniziato a sconsigliare l'uso della DexClassLoad e simili. Purtroppo, come visto sopra, il caricamento dinamico di codice è molto utile e rimuoverlo costituisce una limitazione.

Grab 'n Run è un progetto in corso, una libreria (a breve) open source, un tool e un plug-in per Eclipse che rendono sicuro e semplice il caricamento dinamico del codice, senza modificare nulla del framework sottostante. La libreria, che verrà illustrata in questo talk, sarà resa pubblica a breve, è retro compatibile con le API esistenti e permette il porting da DexClassLoad a SecureDexClassLoad senza sforzi. Il tool, anch'esso reso disponibile pubblicamente a breve, permetterà di effettuare questo passaggio in modo automatico, senza nemmeno aver bisogno del codice. Infine, il plug-in di Eclipse assisterà lo sviluppatore suggerendo l'uso della SecureDexClassLoad al posto della DexClassLoad.