from django.urls import path
from . import views

urlpatterns = [
    #url permettant à l'admin d'avoir tout les enseignants
    path('admin/enseignants/', views.retourner_all_enseignants,name='retourner-enseignants'),

    #url permettant à l'admin d'avoir les information sur un seul enseignant
    path('admin/enseignants/<int:id>/',views.retourner_un_enseignant,name='retourner_un_enseignant'),

    #url permettant à l'admin d'ajouter un enseignant 
    path('admin/enseignants/add/',views.ajouter_enseignant,name='ajouter_enseignant'),

    #url permettant à l'admin de voir toutes les salles 
    path('admin/salles/',views.retourner_salles,name='retourner_salles'),

    #url permettant à l'admin de voir les salles disponibles 
    path('admin/salles/disponibles/',views.retourner_salles_disponibles,name='retourner_salles_disponibles'),

    #url permettant à l'admin de supprimer l'enseignant
    path('admin/enseignants/<int:id>/delete/',views.supprimerEnseignant,name='supprimer_enseignant'),

    #url permettant à l'enseignant de modifier ses informations 
    path('admin/enseignants/<int:id_enseignant>/modify/',views.EnseignantGradeStatusUpdateView.as_view(),name='modifier_info_enseignants'),

    #url permettant à un enseignant de voir toutes ses notifications 
    path('enseignant/<int:id>/notifications/',views.afficher_notifications_enseignant,name='afficher_notification_enseignant'),
]








