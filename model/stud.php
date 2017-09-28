<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Stud extends CI_Model
{
   
     function __construct()
    {
        parent::__construct();
       // $this->load->database();
    }

    function add($data)
    {
          $this->db->insert('users',$data);  
    }
    function totaluser()
    {
      $query=$this->db->get('SELECT name,email,mobile,role_id,password from users');
          return $query;
    }
}
?>