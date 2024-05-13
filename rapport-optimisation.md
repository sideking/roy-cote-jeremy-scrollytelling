# Rapport d'otpimisation du projet ScrollyTelling

[Page Speed Insight - Rapport du 12 mai 2024, 20:24:32](https://pagespeed.web.dev/analysis/https-jeremy-tim-momo-com/6t0967kcse?form_factor=mobile)

[Page Speed Insight - Rapport du 13 mai 2024, 10:29:55](https://pagespeed.web.dev/analysis/https-jeremy-tim-momo-com/2ujt1wa1bx?form_factor=desktop)

## Problème #1
### Les images ne sont pas au bon format et son donc trop volumineuse.
### Les image ont été changé au format webp et ont donc une charge moin volumineuse.
### Résultat: La latence du site est mois élevé et prend moins de temps à charger.

## Problème #1
### La page web charge toute les images au démarage.
### Le lazyLoading a été ajouté a toute les tag img.
### Résultat: le site prend moins de temps à charger a son démarage.

## Problème #1
### Le fichier javascript contient beacoup d'espace inutilisé.
### Le fichier javascript a été optimisé sur une seule ligne et sans espace.
### Résultat: Le fichier javascript charge beaucoup plus rapidement.

Site utilisé : https://mj.olnir.com/tools/minifier/

# A cause de problème qui ne viennent pas de moi, je n'ai pas eu le tempsde mieux optimiser le site
