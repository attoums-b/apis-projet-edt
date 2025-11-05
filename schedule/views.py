from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.response import Response #permet de renvoyer les réponses de la requete sous forme de fichier json
from rest_framework import generics #permet de visualiser les fichiers api en json (avec des get ou post)
from rest_framework.decorators import api_view
from rest_framework import status


from .models import Enseignant, Salle
from .serializers import EnseignantSerializer , SalleSerializer, EnseignantGradeStatutSerializer


# Create your views here.
#fonction qui retourne bonjour
def home(request):
    return HttpResponse("bonjour! ça marche bien tkt")

#définition des vues associés à l'administrateur


#fonction qui permet de retourner tout les enseignants
@api_view(['GET'])
def retourner_all_enseignants(request):
    enseignants = Enseignant.objects.all()
    serializerEns = EnseignantSerializer(enseignants,many=True)
    return Response(serializerEns.data)


#fonction qui permet de retourner un enseignants en particulier
@api_view(['GET'])
def retourner_un_enseignant(request,id):
    #récupération de l'id de l'enseignant 
    id_ens = Enseignant.objects.filter(id_enseignant=id)
    serializerEns = EnseignantSerializer(id_ens,many=True)
    return Response(serializerEns.data)



#def fonction_permettant de retouner toutes les salles

@api_view(['GET'])
def retourner_salles(request):
    salle = Salle.objects.all()
    serializerSalle = SalleSerializer(salle,many=True)
    return Response(serializerSalle.data)


#fonction permettant de stocker et envoyer une notification

"""
Explication : l'administrateur envoie une notification qui est 
ensuite stockée dans la bd et celle ci est automatiquement envoyée 
à celui qu'il a défini : tous les enseignants , a un enseignant en particulier
"""
@api_view(['POST'])
def gerer_notification():
    pass


#fonction permettant de supprimer un Enseignant
@api_view(['DELETE'])
def supprimerEnseignant(request,id):
    try:
        enseignant= Enseignant.objects.get(id_enseignant = id)
        enseignant.delete()
        return Response({'message' : 'Enseignant supprimé avec succès'},status=status.HTTP_200_OK)
    
    except Enseignant.DoesNotExist:
        return Response({'error' : 'enseignant non trouvé'},status=status.HTTP_404_NOT_FOUND)



class EnseignantGradeStatusUpdateView(generics.UpdateAPIView):
    queryset = Enseignant.objects.all()
    serializer_class = EnseignantGradeStatutSerializer
    lookup_field = 'id_enseignant'


@api_view(['PUT'])  
#fonction devant permettre de changer le grade et le statut de l'enseignant
def modifier_infos_enseignant(request,id):
    try:
        enseignant = Enseignant.objects.get(id_enseignant=id)
    except Enseignant.DoesNotExist:
        return Response({'error': 'Enseignant introuvable'},status=status.HTTP_404_NOT_FOUND)
    
    nouveau_grade = request.data.get('grade')
    nouveau_statut = request.data.get('statut')

    if nouveau_grade is not None:
        enseignant.grade = nouveau_grade

    if nouveau_statut is not None:
        enseignant.statut = nouveau_statut

    enseignant.save()

    serializerEns = EnseignantSerializer(enseignant)
    return Response(serializerEns.data,status=status.HTTP_200_OK)


    