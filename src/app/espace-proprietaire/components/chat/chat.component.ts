import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  status: 'online' | 'offline';
  type: 'Locataire' | 'Acheteur' | 'Candidat' | 'Propriétaire';
  typeColor: string;
  isActive: boolean;
}

interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  newMessage = '';
  searchQuery = '';

  constructor(private router: Router) {}

  // Chat users data
  chatUsers: ChatUser[] = [
    {
      id: '1',
      name: 'Pierre Martin',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      lastMessage: 'Bonjour, j\'aimerais avoir plus d\'informations...',
      timestamp: '14:32',
      status: 'online',
      type: 'Locataire',
      typeColor: 'text-orange-600',
      isActive: true
    },
    {
      id: '2',
      name: 'Sophie Dubois',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      lastMessage: 'Merci pour les documents envoyés',
      timestamp: '13:45',
      status: 'online',
      type: 'Acheteur',
      typeColor: 'text-blue-600',
      isActive: false
    },
    {
      id: '3',
      name: 'Thomas Leroy',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      lastMessage: 'Quand puis-je visiter la propriété?',
      timestamp: '12:20',
      status: 'offline',
      type: 'Candidat',
      typeColor: 'text-green-600',
      isActive: false
    },
    {
      id: '4',
      name: 'Emma Moreau',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      lastMessage: 'Le dossier est-il complet maintenant?',
      timestamp: '11:15',
      status: 'online',
      type: 'Propriétaire',
      typeColor: 'text-purple-600',
      isActive: false
    },
    {
      id: '5',
      name: 'Lucas Bernard',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
      lastMessage: 'J\'ai une question sur le bail',
      timestamp: '10:30',
      status: 'offline',
      type: 'Locataire',
      typeColor: 'text-orange-600',
      isActive: false
    },
    {
      id: '6',
      name: 'Camille Petit',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
      lastMessage: 'Rendez-vous confirmé pour demain',
      timestamp: '09:45',
      status: 'online',
      type: 'Acheteur',
      typeColor: 'text-blue-600',
      isActive: false
    }
  ];

  // Current active user (Pierre Martin)
  activeUser = this.chatUsers[0];

  // Chat messages
  messages: ChatMessage[] = [
    {
      id: '1',
      senderId: '1',
      senderName: 'Pierre Martin',
      senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      content: 'Bonjour Marie, j\'espère que vous allez bien. J\'aimerais avoir quelques informations supplémentaires concernant la villa à Neuilly.',
      timestamp: '14:28',
      isOwn: false
    },
    {
      id: '2',
      senderId: '1',
      senderName: 'Pierre Martin',
      senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      content: 'Notamment sur les charges mensuelles et la possibilité d\'avoir un parking supplémentaire.',
      timestamp: '14:29',
      isOwn: false
    },
    {
      id: '3',
      senderId: 'me',
      senderName: 'Marie',
      senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      content: 'Bonjour Pierre ! Bien sûr, je vais vous donner tous les détails.',
      timestamp: '14:30',
      isOwn: true
    },
    {
      id: '4',
      senderId: 'me',
      senderName: 'Marie',
      senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      content: 'Les charges mensuelles s\'élèvent à 150€ et incluent l\'eau, l\'entretien des parties communes et le chauffage collectif.',
      timestamp: '14:31',
      isOwn: true
    },
    {
      id: '5',
      senderId: 'me',
      senderName: 'Marie',
      senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      content: 'Pour le parking supplémentaire, c\'est possible moyennant 80€/mois. Il y a actuellement une place disponible.',
      timestamp: '14:31',
      isOwn: true
    },
    {
      id: '6',
      senderId: '1',
      senderName: 'Pierre Martin',
      senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      content: 'Parfait ! Cela me convient tout à fait. Quand pourrions-nous finaliser le contrat de location ?',
      timestamp: '14:32',
      isOwn: false
    }
  ];

  // Filtered users based on search
  get filteredUsers(): ChatUser[] {
    if (!this.searchQuery.trim()) {
      return this.chatUsers;
    }
    return this.chatUsers.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.lastMessage.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onUserClick(user: ChatUser) {
    // Remove active class from all users
    this.chatUsers.forEach(u => u.isActive = false);
    // Set clicked user as active
    user.isActive = true;
    this.activeUser = user;
  }

  onSendMessage() {
    if (this.newMessage.trim()) {
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        senderId: 'me',
        senderName: 'Marie',
        senderAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
        content: this.newMessage.trim(),
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };

      this.messages.push(newMsg);
      this.newMessage = '';

      // Update last message for active user
      this.activeUser.lastMessage = newMsg.content;
      this.activeUser.timestamp = newMsg.timestamp;

      // Scroll to bottom of messages
      setTimeout(() => {
        const messagesContainer = document.getElementById('chat-messages');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 100);

      // Simulate automatic reply after 2 seconds
      setTimeout(() => {
        this.simulateReply();
      }, 2000);
    }
  }

  simulateReply() {
    const replies = [
      "Merci pour votre message !",
      "Je vais vous répondre rapidement.",
      "Parfait, je prends note.",
      "C'est noté, merci !",
      "Je vous recontacte bientôt.",
      "D'accord, je comprends.",
      "Très bien, je vais vérifier cela.",
      "Parfait, je vous tiens au courant."
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    const replyMsg: ChatMessage = {
      id: Date.now().toString(),
      senderId: this.activeUser.id,
      senderName: this.activeUser.name,
      senderAvatar: this.activeUser.avatar,
      content: randomReply,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      isOwn: false
    };

    this.messages.push(replyMsg);

    // Update last message for active user
    this.activeUser.lastMessage = replyMsg.content;
    this.activeUser.timestamp = replyMsg.timestamp;

    // Scroll to bottom of messages
    setTimeout(() => {
      const messagesContainer = document.getElementById('chat-messages');
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }, 100);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.newMessage.trim()) {
      this.onSendMessage();
    }
  }

  onQuickAction(action: string) {
    switch (action) {
      case 'appointment':
        alert('Planifier un rendez-vous avec ' + this.activeUser.name);
        break;
      case 'dossier':
        alert('Voir le dossier de ' + this.activeUser.name);
        break;
      case 'property':
        alert('Voir la propriété associée');
        break;
    }
  }

  navigateTo(route: string) {
    this.router.navigate(['/espace-proprietaire', route]);
  }

  onAttachFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*/*';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        this.newMessage = `📎 Fichier: ${file.name}`;
      }
    };
    input.click();
  }

  onAttachImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        this.newMessage = `🖼️ Image: ${file.name}`;
      }
    };
    input.click();
  }

  onVoiceMessage() {
    alert('Fonctionnalité d\'enregistrement vocal à implémenter');
  }

  navigateToHome(): void {
    this.router.navigate(['/accueil']).then(() => {
      // Force reload if already on accueil page
      if (this.router.url === '/accueil') {
        window.location.reload();
      }
    });
  }
}
