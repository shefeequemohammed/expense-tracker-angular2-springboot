package com.shef.expensetracker.expense;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Expense {
	
	@Id
	@GeneratedValue
	private int vendorId;
	 
	private String vendorName;
	 
	private String vendorPhone;
	 
	private int vendorBalance;
	 
	private int vendorChequeAmount;
	
	public int getVendorId() {
		return vendorId;
	}


	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
	}


	public String getVendorName() {
		return vendorName;
	}


	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}


	public String getVendorPhone() {
		return vendorPhone;
	}


	public void setVendorPhone(String vendorPhone) {
		this.vendorPhone = vendorPhone;
	}


	public int getVendorBalance() {
		return vendorBalance;
	}


	public void setVendorBalance(int vendorBalance) {
		this.vendorBalance = vendorBalance;
	}


	public int getVendorChequeAmount() {
		return vendorChequeAmount;
	}


	public void setVendorChequeAmount(int vendorChequeAmount) {
		this.vendorChequeAmount = vendorChequeAmount;
	}

	public Expense(int vendorId, String vendorName, String vendorPhone, int vendorBalance, int vendorChequeAmount) {
		super();
		this.vendorId = vendorId;
		this.vendorName = vendorName;
		this.vendorPhone = vendorPhone;
		this.vendorBalance = vendorBalance;
		this.vendorChequeAmount = vendorChequeAmount;
	}
	
	public Expense(){
		
	}
	
	

}
