import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Granny',
      description: 'Ma petite chienne trop mignonne',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy84Ze6-KKTqd9bsKPByo6e75dHZlcjwqjpA&usqp=CAU',
      location: 'Antony'
    },
    {
      id: 2,
      title:'Havane mon amour',
      description: 'Chat-salsero',
      createdDate: new Date(),
      snaps: 6,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEI5_B9-10yQeKhWWA7KpRpPJffOkT3p7Xg&usqp=CAU'
    },
    {
      id: 3,
      title: 'Cheval qui s\'appelle Royal',
      description: 'Il aime bien se rouler par terre',
      createdDate: new Date(),
      snaps: 20,
      imageUrl: 'https://www.aucoeurdeschevaux.com/r/roulade-3913/un-cheval-qui-se-roule-71127.jpg',
      location: 'la campagne'
    },
    {
      id: 4,
      title: 'Granny',
      description: 'Ma petite chienne trop mignonne',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy84Ze6-KKTqd9bsKPByo6e75dHZlcjwqjpA&usqp=CAU',
      location: 'Antony'
    },
    {
      id: 5,
      title:'Havane mon amour',
      description: 'Chat-salsero',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEI5_B9-10yQeKhWWA7KpRpPJffOkT3p7Xg&usqp=CAU'
    },
    {
      id: 6,
      title: 'Cheval qui s\'appelle Royal',
      description: 'Il aime bien se rouler par terre',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://www.aucoeurdeschevaux.com/r/roulade-3913/un-cheval-qui-se-roule-71127.jpg',
      location: 'la campagne'
    },
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById (faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found!");
      } else {
        return faceSnap;
      }
    }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }




  }

