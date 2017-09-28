        <?php if(!defined('BASEPATH')) exit('No direct script access allowed');


class Student extends CI_Controller
{
   
     function __construct()
    {
        parent::__construct();
          $this->load->database();
          $this->load->model('stud');
    }

     function index()
    {  $var['msg']="index page";
        echo json_encode($var);
    }
    

    function adduser()
    {  
        $data=array(
            'name'=>$this->input->post('name'),
            'email'=>$this->input->post('email'),
            'password'=>$this->input->post('password'),
            'mobile'=>$this->input->post('mobile'),
            'role_id'=>$this->input->post('role_id')
        );
        
         if($this->input->post())
         {
             $this->stud->add($data);   
                
                } 
        
            else
           {
               $var['msg']="invalid data";
               echo json_encode($var);
           }
           print_r($data);
        
    }

    function userlist()
    {
        $user=$this->stud->totaluser();
        echo json_encode($user);
    }

    function role()
    {
         $data=array(
            'role_name'=>$this->input->post('role_name'),
            'role_id'=>$this->input->post('role_id')
        );
    }
}

?>