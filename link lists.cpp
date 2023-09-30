//linked lists
#include<iostream>
using namespace std;

class node{
public:
	int value;
	node* next;
};
//displaying values of link_list
void display(node* n){
	while(n!=NULL){
		cout<<n->value<<",";
		n=n->next;
	}
}
void insertfirst(node** head,int val){
	//first create new node
	node* newnode=new node();
	newnode->value=val;
	newnode->next=*head;
	*head=newnode;
}
void insertend(node**head,int val){
	//first create new node
	node*newnode=new node();
	newnode->value=val;
	newnode->next=NULL;
	node* last=*head;
	while(last->next!=NULL){
		last=last->next;
	}
	last->next=newnode;
	
}
int main(){
	node* head=new node();
	node* sec=new node();
	node* th=new node();
head->value=10;
head->next=sec;
sec->value=20;
sec->next=th;
th->value=30;
th->next=NULL;

insertfirst(&head,-1);
insertend(&head,9);
display(head);
}

