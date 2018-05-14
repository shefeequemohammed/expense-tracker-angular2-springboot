package com.shef.expensetracker.expense;

import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExpenseService {
	

	@Autowired
	private ExpenseRepository expenseRepository;
		
	public List<Expense> findAll(){
		List<Expense> expenses = new ArrayList<>();
		expenseRepository.findAll().forEach(expenses::add);
		return expenses;
	}
	
	public void addExpense(Expense expense) {
		expenseRepository.save(expense);
		}
	
	public Expense getExpenseById(int vendorId){
		return expenseRepository.findOne(vendorId);
	}

	public void updateExpense(Expense expense) {
		expenseRepository.save(expense);
	}

	public void deleteExpense(int vendorId) {
		expenseRepository.delete(vendorId);
		
	}
	
	

}
