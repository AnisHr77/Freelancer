use App\Models\User;
use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Database\Seeder;

class ConversationSeeder extends Seeder
{
public function run(): void
{
// Create 2 users
$user1 = User::firstOrCreate(['email' => 'freelancer@example.com'], [
'name' => 'Test Freelancer',
'password' => bcrypt('password')
]);

$user2 = User::firstOrCreate(['email' => 'client@example.com'], [
'name' => 'Kim Owens',
'password' => bcrypt('password')
]);

// Create conversation
$conversation = Conversation::firstOrCreate([
'client_id' => $user1->id,
'freelancer_id' => $user2->id,
]);

// Add messages (make sure to include receiver_id)
Message::create([
'conversation_id' => $conversation->id,
'sender_id' => $user1->id,
'receiver_id' => $user2->id,
'message' => 'Hello! Are you available for a new project?',
]);

Message::create([
'conversation_id' => $conversation->id,
'sender_id' => $user2->id,
'receiver_id' => $user1->id,
'message' => 'Hi user 1, user 2 here!',
]);

Message::create([
'conversation_id' => $conversation->id,
'sender_id' => $user1->id,
'receiver_id' => $user2->id,
'message' => 'Sure, I can start today.',
]);
}
}
