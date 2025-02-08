
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Card from "../components/shared/Card";
import { Music, Link as LinkIcon, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    full_name: '',
    bio: '',
    youtube_url: '',
    soundcloud_url: '',
    instagram_url: '',
    level: '',
    location: '',
  });

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/auth');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      if (data) {
        setProfile(data);
        setFormData({
          full_name: data.full_name || '',
          bio: data.bio || '',
          youtube_url: data.youtube_url || '',
          soundcloud_url: data.soundcloud_url || '',
          instagram_url: data.instagram_url || '',
          level: data.level || '',
          location: data.location || '',
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger le profil",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user');

      const { error } = await supabase
        .from('profiles')
        .update(formData)
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "Profil mis à jour avec succès",
      });
      
      setIsEditing(false);
      getProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le profil",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="md:ml-20 pt-20 pb-20 md:pb-0 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-primary font-medium font-heading">
                {profile?.full_name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <h1 className="text-3xl font-bold font-heading">{profile?.full_name || 'Utilisateur'}</h1>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(!isEditing)}
                className="rounded-full"
              >
                <Edit2 className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-neutral font-sans">
              {profile?.level || 'Niveau non spécifié'} • {profile?.location || 'Lieu non spécifié'}
            </p>
          </div>

          {isEditing ? (
            <Card>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nom complet</label>
                  <Input
                    value={formData.full_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <Textarea
                    value={formData.bio}
                    onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Niveau</label>
                  <Input
                    value={formData.level}
                    onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Localisation</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">YouTube</label>
                  <Input
                    value={formData.youtube_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, youtube_url: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">SoundCloud</label>
                  <Input
                    value={formData.soundcloud_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, soundcloud_url: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Instagram</label>
                  <Input
                    value={formData.instagram_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, instagram_url: e.target.value }))}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                    Annuler
                  </Button>
                  <Button type="submit">
                    Sauvegarder
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            <>
              {profile?.bio && (
                <Card className="mb-6">
                  <p className="text-neutral font-sans">{profile.bio}</p>
                </Card>
              )}

              <div className="grid gap-6">
                <Card>
                  <div className="flex items-center mb-4">
                    <Music className="w-6 h-6 text-primary mr-2" />
                    <h2 className="text-xl font-semibold font-heading">Répertoire</h2>
                  </div>
                  <ul className="space-y-2 text-neutral font-sans">
                    <li>Mozart - Concerto n°3 en Sol majeur</li>
                    <li>Bach - Partita n°2 en Ré mineur</li>
                    <li>Tchaïkovski - Concerto en Ré majeur</li>
                  </ul>
                </Card>

                <Card>
                  <div className="flex items-center mb-4">
                    <LinkIcon className="w-6 h-6 text-primary mr-2" />
                    <h2 className="text-xl font-semibold font-heading">Liens</h2>
                  </div>
                  <div className="space-y-2 font-sans">
                    {profile?.youtube_url && (
                      <a href={profile.youtube_url} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                        YouTube
                      </a>
                    )}
                    {profile?.soundcloud_url && (
                      <a href={profile.soundcloud_url} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                        SoundCloud
                      </a>
                    )}
                    {profile?.instagram_url && (
                      <a href={profile.instagram_url} target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                        Instagram
                      </a>
                    )}
                  </div>
                </Card>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
